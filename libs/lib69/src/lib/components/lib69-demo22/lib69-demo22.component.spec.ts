import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib69Demo22Component } from './lib69-demo22.component';

describe('Lib69Demo22Component', () => {
  let component: Lib69Demo22Component;
  let fixture: ComponentFixture<Lib69Demo22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib69Demo22Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib69Demo22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
