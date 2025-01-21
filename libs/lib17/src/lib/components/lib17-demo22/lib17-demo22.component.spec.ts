import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib17Demo22Component } from './lib17-demo22.component';

describe('Lib17Demo22Component', () => {
  let component: Lib17Demo22Component;
  let fixture: ComponentFixture<Lib17Demo22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib17Demo22Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib17Demo22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
