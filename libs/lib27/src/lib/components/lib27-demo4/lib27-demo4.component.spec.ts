import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib27Demo4Component } from './lib27-demo4.component';

describe('Lib27Demo4Component', () => {
  let component: Lib27Demo4Component;
  let fixture: ComponentFixture<Lib27Demo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib27Demo4Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib27Demo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
