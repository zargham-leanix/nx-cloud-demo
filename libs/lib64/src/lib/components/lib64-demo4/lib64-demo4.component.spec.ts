import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib64Demo4Component } from './lib64-demo4.component';

describe('Lib64Demo4Component', () => {
  let component: Lib64Demo4Component;
  let fixture: ComponentFixture<Lib64Demo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib64Demo4Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib64Demo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
