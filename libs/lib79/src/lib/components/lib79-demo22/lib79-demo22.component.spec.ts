import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib79Demo22Component } from './lib79-demo22.component';

describe('Lib79Demo22Component', () => {
  let component: Lib79Demo22Component;
  let fixture: ComponentFixture<Lib79Demo22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib79Demo22Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib79Demo22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
