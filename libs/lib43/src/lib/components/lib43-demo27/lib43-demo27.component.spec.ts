import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib43Demo27Component } from './lib43-demo27.component';

describe('Lib43Demo27Component', () => {
  let component: Lib43Demo27Component;
  let fixture: ComponentFixture<Lib43Demo27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib43Demo27Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib43Demo27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
