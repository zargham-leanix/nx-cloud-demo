import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib44Demo12Component } from './lib44-demo12.component';

describe('Lib44Demo12Component', () => {
  let component: Lib44Demo12Component;
  let fixture: ComponentFixture<Lib44Demo12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib44Demo12Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib44Demo12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
