import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib98Demo27Component } from './lib98-demo27.component';

describe('Lib98Demo27Component', () => {
  let component: Lib98Demo27Component;
  let fixture: ComponentFixture<Lib98Demo27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib98Demo27Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib98Demo27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
