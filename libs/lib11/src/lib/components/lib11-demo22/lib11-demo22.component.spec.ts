import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib11Demo22Component } from './lib11-demo22.component';

describe('Lib11Demo22Component', () => {
  let component: Lib11Demo22Component;
  let fixture: ComponentFixture<Lib11Demo22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib11Demo22Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib11Demo22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
