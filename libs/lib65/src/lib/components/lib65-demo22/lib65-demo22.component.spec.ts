import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib65Demo22Component } from './lib65-demo22.component';

describe('Lib65Demo22Component', () => {
  let component: Lib65Demo22Component;
  let fixture: ComponentFixture<Lib65Demo22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib65Demo22Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib65Demo22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
