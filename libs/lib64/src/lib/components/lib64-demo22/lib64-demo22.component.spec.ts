import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib64Demo22Component } from './lib64-demo22.component';

describe('Lib64Demo22Component', () => {
  let component: Lib64Demo22Component;
  let fixture: ComponentFixture<Lib64Demo22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib64Demo22Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib64Demo22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
