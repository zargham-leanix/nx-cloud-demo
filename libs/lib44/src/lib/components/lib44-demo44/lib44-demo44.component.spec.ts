import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib44Demo44Component } from './lib44-demo44.component';

describe('Lib44Demo44Component', () => {
  let component: Lib44Demo44Component;
  let fixture: ComponentFixture<Lib44Demo44Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib44Demo44Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib44Demo44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
