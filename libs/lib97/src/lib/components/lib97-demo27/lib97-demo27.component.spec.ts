import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib97Demo27Component } from './lib97-demo27.component';

describe('Lib97Demo27Component', () => {
  let component: Lib97Demo27Component;
  let fixture: ComponentFixture<Lib97Demo27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib97Demo27Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib97Demo27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
