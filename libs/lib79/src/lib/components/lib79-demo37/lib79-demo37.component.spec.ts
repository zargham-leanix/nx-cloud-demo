import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib79Demo37Component } from './lib79-demo37.component';

describe('Lib79Demo37Component', () => {
  let component: Lib79Demo37Component;
  let fixture: ComponentFixture<Lib79Demo37Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib79Demo37Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib79Demo37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
