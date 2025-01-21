import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib13Demo27Component } from './lib13-demo27.component';

describe('Lib13Demo27Component', () => {
  let component: Lib13Demo27Component;
  let fixture: ComponentFixture<Lib13Demo27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib13Demo27Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib13Demo27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
