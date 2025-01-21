import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib38Demo39Component } from './lib38-demo39.component';

describe('Lib38Demo39Component', () => {
  let component: Lib38Demo39Component;
  let fixture: ComponentFixture<Lib38Demo39Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib38Demo39Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib38Demo39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
