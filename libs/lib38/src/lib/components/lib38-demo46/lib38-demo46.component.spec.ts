import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib38Demo46Component } from './lib38-demo46.component';

describe('Lib38Demo46Component', () => {
  let component: Lib38Demo46Component;
  let fixture: ComponentFixture<Lib38Demo46Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib38Demo46Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib38Demo46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
