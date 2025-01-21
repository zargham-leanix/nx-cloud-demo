import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib6Demo22Component } from './lib6-demo22.component';

describe('Lib6Demo22Component', () => {
  let component: Lib6Demo22Component;
  let fixture: ComponentFixture<Lib6Demo22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib6Demo22Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib6Demo22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
