import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib38Demo42Component } from './lib38-demo42.component';

describe('Lib38Demo42Component', () => {
  let component: Lib38Demo42Component;
  let fixture: ComponentFixture<Lib38Demo42Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib38Demo42Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib38Demo42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
