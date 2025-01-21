import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib38Demo8Component } from './lib38-demo8.component';

describe('Lib38Demo8Component', () => {
  let component: Lib38Demo8Component;
  let fixture: ComponentFixture<Lib38Demo8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib38Demo8Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib38Demo8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
