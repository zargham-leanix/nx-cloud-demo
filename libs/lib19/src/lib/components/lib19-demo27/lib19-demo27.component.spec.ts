import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib19Demo27Component } from './lib19-demo27.component';

describe('Lib19Demo27Component', () => {
  let component: Lib19Demo27Component;
  let fixture: ComponentFixture<Lib19Demo27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib19Demo27Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib19Demo27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
