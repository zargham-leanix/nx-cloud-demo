import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib42Demo22Component } from './lib42-demo22.component';

describe('Lib42Demo22Component', () => {
  let component: Lib42Demo22Component;
  let fixture: ComponentFixture<Lib42Demo22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib42Demo22Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib42Demo22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
