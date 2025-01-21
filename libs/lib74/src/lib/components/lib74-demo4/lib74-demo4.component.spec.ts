import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib74Demo4Component } from './lib74-demo4.component';

describe('Lib74Demo4Component', () => {
  let component: Lib74Demo4Component;
  let fixture: ComponentFixture<Lib74Demo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib74Demo4Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib74Demo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
