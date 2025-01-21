import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib88Demo22Component } from './lib88-demo22.component';

describe('Lib88Demo22Component', () => {
  let component: Lib88Demo22Component;
  let fixture: ComponentFixture<Lib88Demo22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib88Demo22Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib88Demo22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
