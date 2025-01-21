import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib45Demo22Component } from './lib45-demo22.component';

describe('Lib45Demo22Component', () => {
  let component: Lib45Demo22Component;
  let fixture: ComponentFixture<Lib45Demo22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib45Demo22Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib45Demo22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
