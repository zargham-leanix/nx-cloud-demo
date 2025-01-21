import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib98Demo22Component } from './lib98-demo22.component';

describe('Lib98Demo22Component', () => {
  let component: Lib98Demo22Component;
  let fixture: ComponentFixture<Lib98Demo22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib98Demo22Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib98Demo22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
