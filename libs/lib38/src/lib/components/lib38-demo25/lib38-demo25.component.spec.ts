import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib38Demo25Component } from './lib38-demo25.component';

describe('Lib38Demo25Component', () => {
  let component: Lib38Demo25Component;
  let fixture: ComponentFixture<Lib38Demo25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib38Demo25Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib38Demo25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
