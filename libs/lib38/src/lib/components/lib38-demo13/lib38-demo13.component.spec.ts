import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib38Demo13Component } from './lib38-demo13.component';

describe('Lib38Demo13Component', () => {
  let component: Lib38Demo13Component;
  let fixture: ComponentFixture<Lib38Demo13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib38Demo13Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib38Demo13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
