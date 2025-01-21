import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib73Demo22Component } from './lib73-demo22.component';

describe('Lib73Demo22Component', () => {
  let component: Lib73Demo22Component;
  let fixture: ComponentFixture<Lib73Demo22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib73Demo22Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib73Demo22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
