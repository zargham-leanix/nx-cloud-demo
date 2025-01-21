import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib34Demo22Component } from './lib34-demo22.component';

describe('Lib34Demo22Component', () => {
  let component: Lib34Demo22Component;
  let fixture: ComponentFixture<Lib34Demo22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib34Demo22Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib34Demo22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
