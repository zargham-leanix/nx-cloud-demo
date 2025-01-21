import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib38Demo10Component } from './lib38-demo10.component';

describe('Lib38Demo10Component', () => {
  let component: Lib38Demo10Component;
  let fixture: ComponentFixture<Lib38Demo10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib38Demo10Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib38Demo10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
