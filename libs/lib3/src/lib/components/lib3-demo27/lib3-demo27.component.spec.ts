import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib3Demo27Component } from './lib3-demo27.component';

describe('Lib3Demo27Component', () => {
  let component: Lib3Demo27Component;
  let fixture: ComponentFixture<Lib3Demo27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib3Demo27Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib3Demo27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
