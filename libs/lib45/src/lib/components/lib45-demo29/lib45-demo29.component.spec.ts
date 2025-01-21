import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib45Demo29Component } from './lib45-demo29.component';

describe('Lib45Demo29Component', () => {
  let component: Lib45Demo29Component;
  let fixture: ComponentFixture<Lib45Demo29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib45Demo29Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib45Demo29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
