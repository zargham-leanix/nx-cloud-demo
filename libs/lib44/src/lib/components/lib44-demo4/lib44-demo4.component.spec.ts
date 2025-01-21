import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib44Demo4Component } from './lib44-demo4.component';

describe('Lib44Demo4Component', () => {
  let component: Lib44Demo4Component;
  let fixture: ComponentFixture<Lib44Demo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib44Demo4Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib44Demo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
