import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib38Demo44Component } from './lib38-demo44.component';

describe('Lib38Demo44Component', () => {
  let component: Lib38Demo44Component;
  let fixture: ComponentFixture<Lib38Demo44Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib38Demo44Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib38Demo44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
