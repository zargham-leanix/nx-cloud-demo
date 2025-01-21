import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib96Demo22Component } from './lib96-demo22.component';

describe('Lib96Demo22Component', () => {
  let component: Lib96Demo22Component;
  let fixture: ComponentFixture<Lib96Demo22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib96Demo22Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib96Demo22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
