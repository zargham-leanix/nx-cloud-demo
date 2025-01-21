import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib38Demo12Component } from './lib38-demo12.component';

describe('Lib38Demo12Component', () => {
  let component: Lib38Demo12Component;
  let fixture: ComponentFixture<Lib38Demo12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib38Demo12Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib38Demo12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
