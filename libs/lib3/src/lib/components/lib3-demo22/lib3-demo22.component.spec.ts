import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib3Demo22Component } from './lib3-demo22.component';

describe('Lib3Demo22Component', () => {
  let component: Lib3Demo22Component;
  let fixture: ComponentFixture<Lib3Demo22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib3Demo22Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib3Demo22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
