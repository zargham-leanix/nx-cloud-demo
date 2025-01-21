import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib29Demo4Component } from './lib29-demo4.component';

describe('Lib29Demo4Component', () => {
  let component: Lib29Demo4Component;
  let fixture: ComponentFixture<Lib29Demo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib29Demo4Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib29Demo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
