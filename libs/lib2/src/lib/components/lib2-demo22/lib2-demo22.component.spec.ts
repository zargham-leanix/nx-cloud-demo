import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib2Demo22Component } from './lib2-demo22.component';

describe('Lib2Demo22Component', () => {
  let component: Lib2Demo22Component;
  let fixture: ComponentFixture<Lib2Demo22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib2Demo22Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib2Demo22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
