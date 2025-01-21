import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib38Demo4Component } from './lib38-demo4.component';

describe('Lib38Demo4Component', () => {
  let component: Lib38Demo4Component;
  let fixture: ComponentFixture<Lib38Demo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib38Demo4Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib38Demo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
