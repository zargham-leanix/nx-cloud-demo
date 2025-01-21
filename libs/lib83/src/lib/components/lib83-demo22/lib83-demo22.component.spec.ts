import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib83Demo22Component } from './lib83-demo22.component';

describe('Lib83Demo22Component', () => {
  let component: Lib83Demo22Component;
  let fixture: ComponentFixture<Lib83Demo22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib83Demo22Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib83Demo22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
