import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib40Demo4Component } from './lib40-demo4.component';

describe('Lib40Demo4Component', () => {
  let component: Lib40Demo4Component;
  let fixture: ComponentFixture<Lib40Demo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib40Demo4Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib40Demo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
