import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib96Demo27Component } from './lib96-demo27.component';

describe('Lib96Demo27Component', () => {
  let component: Lib96Demo27Component;
  let fixture: ComponentFixture<Lib96Demo27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib96Demo27Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib96Demo27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
