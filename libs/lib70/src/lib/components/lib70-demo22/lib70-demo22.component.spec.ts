import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib70Demo22Component } from './lib70-demo22.component';

describe('Lib70Demo22Component', () => {
  let component: Lib70Demo22Component;
  let fixture: ComponentFixture<Lib70Demo22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib70Demo22Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib70Demo22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
