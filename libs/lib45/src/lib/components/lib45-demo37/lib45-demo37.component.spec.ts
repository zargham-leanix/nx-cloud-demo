import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib45Demo37Component } from './lib45-demo37.component';

describe('Lib45Demo37Component', () => {
  let component: Lib45Demo37Component;
  let fixture: ComponentFixture<Lib45Demo37Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib45Demo37Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib45Demo37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
