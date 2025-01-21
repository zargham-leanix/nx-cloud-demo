import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib24Demo22Component } from './lib24-demo22.component';

describe('Lib24Demo22Component', () => {
  let component: Lib24Demo22Component;
  let fixture: ComponentFixture<Lib24Demo22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib24Demo22Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib24Demo22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
