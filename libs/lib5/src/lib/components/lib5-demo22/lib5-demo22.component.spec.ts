import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib5Demo22Component } from './lib5-demo22.component';

describe('Lib5Demo22Component', () => {
  let component: Lib5Demo22Component;
  let fixture: ComponentFixture<Lib5Demo22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib5Demo22Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib5Demo22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
