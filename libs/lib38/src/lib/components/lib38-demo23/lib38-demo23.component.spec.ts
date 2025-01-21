import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib38Demo23Component } from './lib38-demo23.component';

describe('Lib38Demo23Component', () => {
  let component: Lib38Demo23Component;
  let fixture: ComponentFixture<Lib38Demo23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib38Demo23Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib38Demo23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
