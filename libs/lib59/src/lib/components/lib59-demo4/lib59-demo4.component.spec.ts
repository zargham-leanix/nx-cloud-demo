import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib59Demo4Component } from './lib59-demo4.component';

describe('Lib59Demo4Component', () => {
  let component: Lib59Demo4Component;
  let fixture: ComponentFixture<Lib59Demo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib59Demo4Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib59Demo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
