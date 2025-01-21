import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib44Demo29Component } from './lib44-demo29.component';

describe('Lib44Demo29Component', () => {
  let component: Lib44Demo29Component;
  let fixture: ComponentFixture<Lib44Demo29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib44Demo29Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib44Demo29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
