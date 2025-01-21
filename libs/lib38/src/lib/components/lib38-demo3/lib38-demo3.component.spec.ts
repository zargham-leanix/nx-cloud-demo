import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib38Demo3Component } from './lib38-demo3.component';

describe('Lib38Demo3Component', () => {
  let component: Lib38Demo3Component;
  let fixture: ComponentFixture<Lib38Demo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib38Demo3Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib38Demo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
