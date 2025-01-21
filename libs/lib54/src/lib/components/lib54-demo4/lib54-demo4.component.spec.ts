import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib54Demo4Component } from './lib54-demo4.component';

describe('Lib54Demo4Component', () => {
  let component: Lib54Demo4Component;
  let fixture: ComponentFixture<Lib54Demo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib54Demo4Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib54Demo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
