import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib38Demo26Component } from './lib38-demo26.component';

describe('Lib38Demo26Component', () => {
  let component: Lib38Demo26Component;
  let fixture: ComponentFixture<Lib38Demo26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib38Demo26Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib38Demo26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
